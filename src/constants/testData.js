const DB = {
  profiles: [
    {
      surname: 'Lee', 
      middlename: '', 
      forename: 'Apple', 
      sex: 'male', 
      age: 26, 
      album: [
        require('../../assets/5dcc613f1f00009304dee539.jpeg'), 
        require('../../assets/Acute-Dog-Diarrhea-47066074.jpg'), 
        require('../../assets/1800x1200_great_dane_dog_drooling_other.jpg')
      ]
    }, 
    {
      surname: 'Wong', 
      middlename: '', 
      forename: 'banana', 
      sex: 'male', 
      age: 18, 
      album: [
        require('../../assets/Scottish-fold.png'),
        require('../../assets/adult-homeless-cat-asking-for-food-picture-id847415388.jpg'), 
        require('../../assets/dog-451643.jpg'), 
        require('../../assets/5dcc613f1f00009304dee539.jpeg'), 
        require('../../assets/images.jpeg')
      ]
    }, 
    {
      surname: 'Hong', 
      middlename: 'Lisa', 
      forename: 'Ming', 
      age: 20, 
      album: [
        require('../../assets/adult-homeless-cat-asking-for-food-picture-id847415388.jpg')
      ]
    }, 
    {
      surname: 'Lee', 
      middlename: '', 
      forename: 'Apple', 
      sex: 'male', 
      age: 26, 
      album: [
        require('../../assets/5dcc613f1f00009304dee539.jpeg'), 
        require('../../assets/Acute-Dog-Diarrhea-47066074.jpg'), 
        require('../../assets/1800x1200_great_dane_dog_drooling_other.jpg')
      ]
    }, 
    {
      surname: 'Lee', 
      middlename: '', 
      forename: 'Apple', 
      sex: 'male', 
      age: 26, 
      album: [
        require('../../assets/5dcc613f1f00009304dee539.jpeg'), 
        require('../../assets/Acute-Dog-Diarrhea-47066074.jpg'), 
        require('../../assets/1800x1200_great_dane_dog_drooling_other.jpg')
      ]
    }, 
  ]
}

class Server {
  constructor(db) {
    this.db = db; 
  }

  getMatchedProfiles = (id, n) => {
    // run machine learning algorithm
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const profiles = this.db.profiles.slice(0, n); 
        if(profiles !== undefined) {
          resolve(profiles); 
        } else {
          reject(new Error(`Could not handle this request with id: ${id}`)); 
        }
      }, 1000)
    }); 
  }
}


export const server = new Server(DB); 