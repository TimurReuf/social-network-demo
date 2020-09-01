import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: '15'},
        {id: 2, message: 'It\'s my first post', likes: '20'},
        {id: 3, message: 'BlaBla', likes: '27'},
        {id: 4, message: 'DaDA', likes: '29'}
    ]}

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("lol,new text-new test")
        //2. action
    let newState = profileReducer(initialState,action)
    //3.expectation
    expect(newState.posts.length).toBe(5);
});
test('message of new posts should be correct', () => {
    //1. test data
    let action = addPostActionCreator("lol,new text-new test")
    //2. action
    let newState = profileReducer(initialState,action)
    //3.expectation
    expect(newState.posts[4].message).toBe("lol,new text-new test");
});
test('after deleting length of post should be decrement', () => {
    //1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(initialState,action)
    //3.expectation
    expect(newState.posts.length).toBe(3);
});
test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000)
    //2. action
    let newState = profileReducer(initialState,action)
    //3.expectation
    expect(newState.posts.length).toBe(4);
});