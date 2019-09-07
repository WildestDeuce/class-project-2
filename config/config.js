module.exports = {
  'development': {
    'username': 'root',
    'password': process.env.MYSQL_PW,
    'database': 'chatspace',
    'host': 'localhost',
    'dialect': 'mysql'
  },
  'test': {
    'username': 'root',
    'password': null,
    'database': 'testdb',
    'host': 'localhost',
    'dialect': 'mysql',
    'logging': false
  },
  'production': {
    'use_env_variable': 'JAWSDB_URL',
    'dialect': 'mysql',
    'host': '	izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    'username': 'vrox2yis9tv98uhp',
    'password':'medzuk2z8426exdb',
    'database': 'ov4fopzfp7nnxv0t',
  }
}
