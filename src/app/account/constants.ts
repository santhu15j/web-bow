export const accountInfo = [
  {
    image: './assets/account/slide1.png',
    title: 'Lorem Ipsum 1',
    description: 'Lorem ispum lorem ipsum 1'
  },
  {
    image: './assets/account/slide2.png',
    title: 'Lorem Ipsum 2',
    description: 'Lorem ispum lorem ipsum 2'
  },
  {
    image: './assets/account/slide3.png',
    title: 'Lorem Ipsum 3',
    description: 'Lorem ispum lorem ipsum 3'
  }
]

export const validator = {
  userName: {
    min: 4,
    max: 16
  },
  password: {
    min: 6
  }
};

export const errorMessages = {
  userName: {
    required: 'Username is required.',
    minLength: `Username must be at least ${ validator.userName.min } characters.`,
    maxLength: `Username should not be more than ${ validator.userName.max } characters.`
  },
  email: {
    required: 'Email is required.',
    email: 'Invalid Email.'
  },
  password: {
    required: 'Password is required',
    minLength: `Password must be at least ${ validator.password.min } characters.`
  },
  agree: {
    required: 'Please agree the terms of service.'
  },
  code: {
    required: 'Code is required'
  }
};
