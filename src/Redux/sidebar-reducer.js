let initialState = {
    friends: [
        {
            id: 1,
            name: "Dima",
            img: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        },
        {
            id: 2,
            name: "Timur",
            img: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        },
        {
            id: 3,
            name: "Sveta",
            img: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}
export default sidebarReducer