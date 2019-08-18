/*module.exports = {
    development: {
      database: {
        host: "localhost",
        port: 5432,
        name: "produtos-apirest",
        dialect: "postgres",
        user: "postgres",
        password: "masterkey"
      }
    },
    production: {
      database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
      }
    }
  };
*/
module.exports = {
    development: {
      database: {
        host: "ec2-23-23-228-132.compute-1.amazonaws.com",
        port: 5432,
        name: "dfl9b89r16ngc",
        dialect: "postgres",
        user: "sqtpcqcbnduczm",
        password: "990e7f39ad04005f9f8127f2fad1b62a95bf0c48d45621d06dba34837a07102c",
        ssl: true,
        dialectOptions: {
          "ssl": {"require":true }
        }
      }
    },
    production: {
      database: {
        host: "ec2-23-23-228-132.compute-1.amazonaws.com",
        port: 5432,
        name: "dfl9b89r16ngc",
        dialect: "postgres",
        user: "sqtpcqcbnduczm",
        password: "990e7f39ad04005f9f8127f2fad1b62a95bf0c48d45621d06dba34837a07102c",
        ssl: true,
        dialectOptions: {
          "ssl": {"require":true }
        }
      }
    }
  };
