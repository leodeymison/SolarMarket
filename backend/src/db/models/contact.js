const { Sequelize } = require('sequelize')
const connection = require('../connect')

const Contact = connection.define('contact', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo obrigatório"
            }
        }
    },
    second_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo obrigatório"
            }
        }
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo obrigatório"
            }
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo obrigatório"
            }
        }
    },
    m_phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo obrigatório"
            }
        }
    },
    mailto: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Campo deve ser email"
            },
            notEmpty: {
                msg: "Campo obrigatório"
            }
        }
    },
    m_mailto: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Campo obrigatório"
            }
        }
    },
})

Contact.sync({force: false})


module.exports = Contact
