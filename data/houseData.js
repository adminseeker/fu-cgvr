export default house = {
  House: {
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
    adjacentRooms: ['Ugra_Narasimha', 'Stepped_Tank']
  },
  Ugra_Narasimha: {
    roomName: 'Ugra_Narasimha',
    info:`
    This is the largest statue in Hampi and depicts Lord Narasimha in a terrifying or angry form. Narasimha which means half-man and half-lion is one of the ten incarnations of Lord Vishnu. This monolithic structure, which is 6.7 m in height, has the lord sitting cross-legged position on the coil of a giant seven-headed snake Adishesha. Originally the statue also had Goddess Lakshmi sitting on lord’s lap, but according to history it was vandalised and damaged in the year 1565. The statue of Goddess Lakshmi can now be seen in Kamalapura Museum. `,
    img: 'ugra_narasimha.jpg',
    adjacentRooms: ['Krishna_Temple', 'Virupaksha_Temple']
  },
  Krishna_Temple: {
    roomName: 'Krishna_Temple',
    info: `
    This temple was built by the king (Krishnadevaraya) in 1513 AD to celebrate the conquest of the eastern kingdom of Udayagiri or Utkala (in the present day Orissa state). The main idol installed in the temple was the figure of Balakrishna (Lord Krishna as infant). This idol is now displayed in the state museum at Chennai. A huge slab installed inside the courtyard of the temple states the story of this temple and the conquest of Ulkala.`,
    img: 'krishna_temple.jpg',
    adjacentRooms: ['Stepped_Tank']
  },
  
  Stepped_Tank: {
    roomName: 'Stepped_Tank',
    info: `
    The tank is totally different from other structures of Hampi as the Stepped Tank is constructed using finely finished blocks of black schist stones. All the steps or stones bears some sketches and marks made by the architects. The main purpose of this tank is not known for sure, but was used for religious ceremonies by the royals. These tanks were used for rituals, cleansing and during rites of concretion. The water tanks is considered sacred from the Ganges and even used for immersing of Ganesha idols. Usually these tanks are made near the temples and used to accommodate bathing, cleansing activities before prayers.`,
    img: 'stepped_tank.jpg',
    adjacentRooms: ['Virupaksha_Temple']
  },
}
