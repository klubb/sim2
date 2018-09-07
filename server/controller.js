module.exports = {
  get: (req, res) => {
    const db = req.app.get("db");
    db.get_houses().then(houses => {
      res.status(200).send(houses);
    }).catch(err => {
        console.log(err)
    })
  },

  post: (req, res) => {
      let {name, address, city, state, zip, img, mortgage, rent} = req.body
      const db = req.app.get('db')
      db.create_house([name, address, city, state, zip, img, mortgage, rent]).then((house) => {
          res.status(200).send(house)
      }).catch(err => {
          console.log(err)
      })
  },

  delete: (req, res) => {
    const db = req.app.get('db')
    let { id } = req.params
    db.delete_house({id}).then((house) => {
        res.status(200).send(house)
    }).catch(err => {
        console.log(err)
    })
  }
}
