export default house = {
    Vittala_Temple: {
      roomName: 'Vittala_Temple',
      info: `
      The temple is built in the form of a sprawling campus with compound wall and gateway towers. There are many halls, pavilions and temples located inside this campus. Vittala, after whom the temple is known, is a form of lord Vishnu.  
      `,
      adjacentRooms: ['Virupaksha_Temple'],
    },
    Virupaksha_Temple: {
      roomName: 'Virupaksha_Temple' ,
      info: `
      Hampi (Kannada: Hampe) is a village in northern Karnataka state, India. It is located within the ruins of Vijayanagara, the former capital of the Vijayanagara Empire. Predating the city of Vijayanagara, it continues to be an important religious centre, housing the Virupaksha Temple, as well as several other monuments belonging to the old city. The ruins are a UNESCO World Heritage Site, listed as the Group of Monuments at Hampi.`,
      img: 'virupaksha_temple.jpg',
      adjacentRooms: ['Dining_Room', 'Living_Room']
    },
    Dining_Room: {
      roomName: 'Dining_Room',
      roomName1: 'Dining_Room',
      info:`
        * Elegant chandelier with LED lights.
        * Tiered high ceilings.
        * Wrought iron window for added security.
        * Direct acces to kitchen for convenience.
        * Beautiful tile floor.`,
      img: 'dining_room.jpg',
      adjacentRooms: ['Kitchen', 'Virupaksha_Temple']
    },
    Kitchen: {
      roomName: 'Kitchen',
      roomName1: 'Kitchen',
      info: `
        * Granite counter tops and backsplash (3/4 inch-thick Brazilian Giallo Fiesta).
        * Custom-made island with end drawers and wine bottle storage.
        * Samsung stainless steel appliances.
        * Birchwood custom cabinets and pantry with elegant crown molding.
        * Stainless steel 9" extra deep double sinks with pullout faucet and soap dispenser.
        * Under cabinet and top of cabinet LED lights.`,
      img: 'kitchen.jpg',
      adjacentRooms: ['Living_Room']
    },
    
    Living_Room: {
      roomName: 'Living_Room',
      roomName1: 'Living_Room',
      info: `
        * Informal sunken family room.
        * Chimney with mantle.
        * Remote controlled ceiling fans.
        * Tiered ceiling.
        * T.V. wall mount/media closet.`,
      img: 'living_room.jpg',
      adjacentRooms: ['Virupaksha_Temple']
    },
  }
  