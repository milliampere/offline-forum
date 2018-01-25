import * as api from '../api';
import fakePosts from '../fakePosts';
import fakeComments from '../fakeComments';

describe('Api', () => {

  beforeEach(() =>{
    localStorage.clear();

    const postsInLocalStorage = localStorage.getItem('posts');
    if(!postsInLocalStorage){
      localStorage.setItem('posts', JSON.stringify(fakePosts.data));
    }    

  });
  
  afterEach(() =>{
    localStorage.clear();
  });
  
  it('should return a string with 10 characters', () => {
    expect(api.generateID()).toHaveLength(10);
  })

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

  it('should remove a post', () => {
    api.removePost('565ddy34');
    const posts = localStorage.getItem('posts');
    const parsedPosts = posts ? JSON.parse(posts) : [];
    expect(parsedPosts).toHaveLength(2);
  })

  it('should fetch ', () => {
  })

})


describe('Comments', () => {

  beforeEach(() =>{
    localStorage.clear();

    const commentsInLocalStorage = localStorage.getItem('comments');
    if(!commentsInLocalStorage){
      localStorage.setItem('comments', JSON.stringify(fakeComments.data));
    }    

  });
  
  afterEach(() =>{
    localStorage.clear();
  });

  it('should fetch all comments', () => {
    const result = api.fetchAllCommments();
    expect(result).toHaveLength(3);
  })

})