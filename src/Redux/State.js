import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: '15'},
                {id: 2, message: 'It\'s my first post', likes: '20'},
                {id: 3, message: 'BlaBla', likes: '27'},
                {id: 4, message: 'DaDA', likes: '29'}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sideBar: {
            frends: [
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
    },
    _callSubscriber() {
        console.log('dfa')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)


    }
}




window.store = store;
export default store
