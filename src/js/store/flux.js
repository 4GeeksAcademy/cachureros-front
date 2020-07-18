const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      //Your data structures, A.K.A Entities
      contacts: [
        /* 				{
					id: "281",
					agenda_slug: "mmayoragenda",
					full_name: "Miguel Mayor",
					email: "mmayor@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 22:48:46"
				},
				{
					id: "313",
					agenda_slug: "mmayoragenda",
					full_name: "Saili Mayor",
					email: "saili@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 23:33:42"
				},
				{
					id: "314",
					agenda_slug: "mmayoragenda",
					full_name: "Pepe Mayor",
					email: "Pepe@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2019-08-15 23:34:01"
				} */
      ],
      user: {
        id: '1',
        name: 'Juan Perez',
        email: 'juan@gmail.com'  
      },
      userStore: {
        url: 'juan2020',
        userFirstName: 'Juan',
        storeName:'Juan Store',
        userPhoto: '/images/juanita.jpg',
        storePhoto: '/images/tendita-juanita.png',
        contryStore: 'Chile',
        cityStore: 'Santiago',
        district: 'Las Condes',
        registerDate: '01-fev-2020',
        qtyToBeSale: 62,
        qtySold: 422,
        qtyLikes: 10,
        qtyFollowers: 5000,
        qtyFollowing: 2000,
        blocked: false,
        products: [
          {
            id:1,
            name: 'Product 1',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:2,
            name: 'Product 2',
            price: 20000.00,
            photo: '/images/15kg-Conjunto- 5.png'
          },
          {
            id:3,
            name: 'Product 3',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 6.png'
          },
          {
            id:4,
            name: 'Product 4',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:5,
            name: 'Product 5',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:6,
            name: 'Product 6',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:7,
            name: 'Product 7',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:8,
            name: 'Product 8',
            price: 30000.00,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id:9,
            name: 'Product 9',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:10,
            name: 'Product 10',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:11,
            name: 'Product 11',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:12,
            name: 'Product 12',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id:3,
            name: 'Product 13',
            price: 10000.00,
            photo: '/images/15kg-Conjunto- 4.png'
          }
        ]
      },
      infobar: {
        show:false,
        info:'',
        info2:'',
        image: null
        
      },
      infoStore: {
        userName:"juanita",
        storeName:'Juanita',
        photoShopper_src:'/images/juanita.jpg',
        photoStore_src: '/images/tendita-ejuanita.jpg'
        
      },
      userCart:{
        id: 1,
        user: {
          id: 10
        },
        products: [
          {
            id: 1001,
            name: 'Product 1',
            discount: 10000,
            price: 12000,
            photo: '/images/Hee79dcebf31a47f2b483 2.png'
          },
          {
            id: 1002,
            name: 'Product 2',
            discount: 10000,
            price: 12000,
            photo: '/images/Hee79dcebf31a47f2b483 2.png'
          },
          {
            id: 1003,
            name: 'Product 3',
            discount: 10000,
            price: 12000,
            photo: '/images/Hee79dcebf31a47f2b483 2.png'
          },
          {
            id: 1004,
            name: 'Product 4',
            discount: 10000,
            price: 12000,
            photo: '/images/Hee79dcebf31a47f2b483 2.png'
          },
        ]

      },
      userMessages: [
        {
          id:1,
          user_id:1,
          type: 'duda',
          message:'message 1',
          status:'nueva',
          user_from:2,
          user_from_photo: '/images/juanita.jpg',
          link:'/product-view/12',
          date:'17-07-2020 13:10:01'      
        },
        {
          id:2,
          user_id:1,
          type: 'oferta',
          message:'message 2',
          status:'leido',
          user_from:2,
          user_from_photo: '/images/juanita.jpg',
          link:'/product-view/12',
          date:'17-07-2020 13:10:01'
        },
        {
          id:3,
          user_id:1,
          type: 'venta',
          message:'message 3',
          status:'leido',
          user_from:2,
          user_from_photo: '/images/juanita.jpg',
          link:'/product-view/12',
          date:'17-07-2020 13:10:01'        
        },
        {
          id:4,
          user_id:1,
          type: 'duda',
          message:'message 4',
          status:'nuevo',
          user_from:2,
          user_from_photo: '/images/juanita.jpg',
          link:'/product-view/12',
          date:'17-07-2020 13:10:01'        
        },
        {
          id:5,
          user_id:1,
          type: 'oferta',
          message:'message 5',
          status:'nueva',
          user_from:2,
          user_from_photo: '/images/juanita.jpg',
          link:'/product-view/12',
          date:'17-07-2020 13:10:01'
        },
        {
          id:6,
          user_id:1,
          type: 'venta',
          message:'message 6',
          status:'leido',
          user_from:2,
          user_from_photo: '/images/juanita.jpg',
          link:'/product-view/12',
          date:'17-07-2020 13:10:01'        
        },
        {
          id:7,
          user_id:1,
          type: 'duda',
          message:'message 7',
          status:'nueva',
          user_from:2,
          user_from_photo: '/images/juanita.jpg',
          link:'/product-view/12',
          date:'17-07-2020 13:10:01'        
        },
        {
          id:8,
          user_id:1,
          type: 'oferta',
          message:'message 8',
          status:'leido',
          user_from:2,
          user_from_photo: '/images/juanita.jpg',
          link:'/product-view/12',
          date:'17-07-2020 13:10:01'        
        },
      ],
      product: {
        id: 1000,
        store: {
          url:'juan2020',
          userFirstName: 'Juania',
          storeName: 'Juan Store',
          userPhoto: '/images/juanita.jpg',
          storePhoto: '/images/tendita-juanita.png'
        },
        name: "Zapatillas deportivas transpirables a la moda para hombre y mujer",
        price: 23000.00,
        originalPrice: 40000.00, 
        brand: 'Ruko',
        color: 'Verde Amerillo',
        model: 'Deportiva',
        size: '41',
        condition: 'Nuevo',
        qty: 1,
        photos: [
          '/images/Imagen Muestra.png',
          '/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 6.png',
          '/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 7.png',
          '/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 8.png',
          '/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 9.png',
        ],
        relatedProducts: [
          {
            id: 1001,
            name: 'Product 1',
            price: 12000,
            photo: '/images/Hee79dcebf31a47f2b483 2.png'
          },
          {
            id: 1002,
            name: 'Product 2',
            price: 12000,
            photo: '/images/4c10f6caade55663e34b2699d4353c18 2.png'
          },
          {
            id: 1003,
            name: 'Product 3',
            price: 12000,
            photo: '/images/15kg-Conjunto- 4.png'
          },
          {
            id: 1004,
            name: 'Product 4',
            price: 12000,
            photo: '/images/15kg-Conjunto- 6.png'
          },
          {
            id: 1005,
            name: 'Product 5',
            price: 12000,
            photo: '/images/15kg-Conjunto- 7.png'
          },
          {
            id: 1005,
            name: 'Product 6',
            price: 12000,
            photo: '/images/15kg-Conjunto- 7.png'
          }

        ]
      },
      products: [
        {
          id: "1000",
          nombre_producto: "Arrimo",
          precio: "$ 40.000",
        },
        {
          id: "1001",
          nombre_producto: "Bateria de Cocina",
          precio: "$ 10.000",
        },
        {
          id: "1002",
          nombre_producto: "Reloj Hombre",
          precio: "$ 5.000",
        },
        {
          id: "1003",
          nombre_producto: "Botas de Nieve",
          precio: "$ 60.000",
        },
        {
          id: "1004",
          nombre_producto: "Botas de invierno",
          precio: "$ 120.000",
        },
      ],

      error: undefined,
    },
    actions: {
      //(Arrow) Functions that update the Store
      // Remember to use the scope: scope.state.store & scope.setState()
      setInfoBar: (show, info, info2, image) => {
        console.log('flux.setInfoBar')
        //const store = getStore()
        let infobar =  {
          show:show,
          info:info,
          info2: info2,
          image: image
        }
        setStore({ infobar: infobar });
      },

      setInfoStore: (userName,storeName, photoShopper_src, photoStore_src ) => {
        console.log('flux.setInfoStore')
        //const store = getStore()
        let infoStore =  {
          userName:userName,
          storeName:storeName,
          photoShopper_src: photoShopper_src,
          photoStore_src: photoStore_src
        }
        setStore({ infoStore: infoStore });
      },

      getInfoBar: () => {
        console.log('flux.setInfoBar')
        const store = getStore()

        return store.infobar;
      },
      
      getInfoStore: () => {
        console.log('flux.getInfoStore')
        const store = getStore()

        return store.infoStore;
      },

      getUser() {
        console.log('flux.getUser()')
        const store = getStore()

        return store.user
      },
      fetchProduct: (id) => {
        const store = getStore();
        return store.product
      },

      fetchUserCart: (userId) => {
        const store = getStore();
        return store.userCart
      },

      fetchUserStore: (userName) => {
        const store = getStore();
        return store.userStore
      },
      fetchUserMessages: (userId) => {
        const store = getStore();
        return store.userMessages
      }, 
      fetchContacts: (url) => {
        console.log("flux.fetchContacts");
        console.log("flux.fetchContacts.url", url);

        //const store = getStore();
        let contacts = []; //store.contacts;
        let ver;
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("flux.fetchContacts.data", data);
            contacts = data;
            setStore({ contacts: contacts });
          })
          .catch((error) => {
            console.log("flux.fetchContacts.error", error);
          });

        console.log("flux.fetchContacts.contacts", contacts);
        //if (ver == undefined) contacts = [];

        setStore({ contacts: contacts });
      },

      addContact: (contact) => {
        console.log("flux.addContact");
        const store = getStore();

        //contact.id = Math.floor(Math.random() * 9999999999);
        console.log("flux.addContact.contact", contact);
        console.log(store.contacts);
        let contacts = store.contacts;

        let data = {};
        fetch(" https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log("flux.addContact.data 1:", data);
            contacts.push(data);
            contact = data;
            setStore({ contacts: contacts });
          })
          .catch((error) => {
            console.log("flux.addContact.error", error);
          });

        console.log("flux.addContact.data 2:", data);
        //if (!contacts) contacts = [contact];
        //else contacts.push(data);

        console.log("addContact.contacts", contacts);
        console.log("addContact.contact", contact);

        return data;
      },

      deleteContact: (contact) => {
        console.log("flux.deleteContent");
        console.log(contact);
        const store = getStore();

        fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            console.log(resp.status);

            let contacts = store.contacts;
            let newContacts = contacts.filter((c) => c !== contact);
            console.log("newContacts", newContacts);
            setStore({ contacts: newContacts });
            console.log("store.contacts", store.contacts);
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
      },

      editContact: (contact) => {
        console.log("flux.editContact");
        console.log("flux.editContact.contact", contact);

        const store = getStore();
        console.log("store.contacts", store.contacts);

        let data = {};
        fetch("https://assets.breatheco.de/apis/fake/contact/" + contact.id, {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log("flux.editContact.data 1:", data);
            //contacts.push(data);
            //						contact = data;

            let newContacts = store.contacts.map((c) => {
              if (c.id === contact.id) {
                return contact;
              }
              return c;
            });
            console.log("flux.editContact.newContacts", newContacts);
            setStore({ contacts: newContacts });

            //setStore({ contacts: contacts });
          })
          .catch((error) => {
            console.log("flux.editContact.error", error);
          });

        console.log("flux.editContact.data 2:", data);
        //if (!contacts) contacts = [contact];
        //else contacts.push(data);
      },
    },
  };
};

export default getState;