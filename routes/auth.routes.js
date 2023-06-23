const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// modelos
const User = require('../models/User.model');

// rotas
router.post('/signup', async (req, res, next) => {
  const { username,name,gender, email, password } = req.body;
  try {
    if (!username || !email || !password || !gender || !name) {
      throw new Error('Campo são obrigatórios!');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new Error('Email não é válido!');
    }

    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (!passwordRegex.test(password)) {
      throw new Error(
        'Senha deve ter 6 caracteres e ao menos 1 letra maiúscula, 1 minúscula e 1 número'
      );
    }

    const user = await User.findOne({ email });
    if (user) {
      throw new Error('Email já cadastrado!');

    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      throw new Error('Username já cadastrado!');
    }

    const hash = bcrypt.hashSync(password, 12);

    await User.create({ username,name,gender, email, passwordHash: hash });
    res.status(201).json(`Usuário ${username} criado com sucesso!`);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      throw new Error('Campos são obrigatórios!');
    }
    const foundUser = await User.findOne({ username });
    if (!foundUser) {
      throw new Error('Usuário ou senha incorretos.');
    }

    const verify = bcrypt.compareSync(password, foundUser.passwordHash);

    if (!verify) {
      throw new Error('Usuário ou senha incorretos.');
    }

    const payLoad = {
      _id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email,
    };

    const authToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: '6h',
    });

    res.status(200).json({ authToken });
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

module.exports = router;
