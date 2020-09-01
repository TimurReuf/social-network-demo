const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            img: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        },
        {
            id: 2,
            name: 'Timur',
            img: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        },
        {
            id: 3,
            name: 'Sveta',
            img: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        },
        {
            id: 4,
            name: 'Serega',
            img: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        },
        {
            id: 5,
            name: 'Ilyas',
            img: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        }
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is yours it-Kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage = action.newMessageBody
                return {
                ...state,
                messages : [...state.messages, {id: 6, message: newMessage}],
            }
        }
        default :
            return state

    }

}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})
export default dialogsReducer