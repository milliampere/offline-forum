import * as api from '../../api';
import fakePosts from '../../fakePosts';
import fakeComments from '../../fakeComments';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

describe('General', () => {

  it('should return a string with 10 characters', () => {
    expect(api.generateID()).toEqual(expect.any(String));
    expect(api.generateID()).toHaveLength(10);
  })

})

describe('Posts', () => {

  beforeEach(() =>{
    const postsInLocalStorage = localStorage.getItem('posts');
    if(!postsInLocalStorage){
      localStorage.setItem('posts', JSON.stringify(fakePosts.data));
    }    
  });
  
  it('should create post object', () => {
    const result = api.createPostObject();
    expect(result).toEqual(expect.objectContaining({
      'title': expect.any(String),
      'content': expect.any(String),
      'id': expect.any(String),
      'date': expect.anything()
    }));
  })

  it('should fetch all posts', () => {
    const result = api.fetchAllPosts();
    expect(result).toHaveLength(3);
  })

  it('should return an empty array', () => {
    localStorage.clear();
    const result = api.fetchAllPosts();
    expect(result).toEqual([]);
  })

  it('should store post objects in local storage', () => {
    localStorage.clear();
    expect(localStorage.getItem('posts')).toBeFalsy();
    api.storePostObject(fakePosts.data);
    const posts = localStorage.getItem('posts');
    expect(JSON.parse(posts)).toEqual(fakePosts.data);
  }) 

  it('should remove a post', () => {
    let posts = JSON.parse(localStorage.getItem('posts'));
    expect(posts).toHaveLength(3);
    api.removePost('565ddy34');
    posts = JSON.parse(localStorage.getItem('posts'));
    expect(posts).toHaveLength(2);
  })

})

describe('Comments', () => {

  beforeEach(() =>{
    const commentsInLocalStorage = localStorage.getItem('comments');
    if(!commentsInLocalStorage){
      localStorage.setItem('comments', JSON.stringify(fakeComments.data));
    }    

  });

  it('should create comment object', () => {
    const result = api.createCommentObject();
    expect(Object.keys(result)).toEqual([ 'comment', 'id', 'postId', 'author', 'date' ]);
  })

  it('should fetch all comments', () => {
    const result = api.fetchAllCommments();
    expect(result).toHaveLength(3);
  })

  it('should remove comment', () => {
    let comments = JSON.parse(localStorage.getItem('comments'));
    expect(comments).toHaveLength(3);
    api.removeComment('_f3io6nfiv');
    comments = JSON.parse(localStorage.getItem('comments'));
    expect(comments).toHaveLength(2);
  })

})


describe('Persona', () => {

  beforeEach(() =>{

    localStorage.setItem('currentPersona', JSON.stringify('Zac'));
    localStorage.setItem('personas', JSON.stringify(['Zac']))

  });

  it('should fetch current persona', () => {
    const result = api.fetchCurrentPersona();
    expect(result).toEqual('Zac');
  })

  it('should fetch personas', () => {
    const result = api.fetchPersonas();
    expect(typeof result).toBe('object');
    expect(result).toEqual(['Zac']);
  })

  it('should return nothing if no personas', () => {
    localStorage.clear();
    const result = api.fetchPersonas();
    expect(result).toEqual([]);
  }) 

})

describe('Bot', () => {

  jest.useFakeTimers();

  it('should return an object with bot message', () => {
    const result = api.botReply();
    jest.runAllTimers();
    return expect(result).resolves.toEqual(
      expect.objectContaining({
        bot: true,      
        message: expect.any(String)
      })
    )
  })

})