db.createUser({
    user: 'user-test',
    pwd: 'password-test',
      roles: [
                { role: "readWrite", db: "db" }
             ]
})

