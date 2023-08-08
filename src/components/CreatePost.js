import React,{useState} from 'react';
import UploadFile from './indiComp/UploadFile';
import './CreateStyle.css'
import AddCommunity from './indiComp/AddCommunity';
import { useEffect } from 'react';
import TextInputs from './indiComp/TextInputs';

const CreatePost =()=>{
    const [postData,setPostData] = useState({title:'',description:'',url:'',photo:'',video:'',audio:'',communities:{input1:'',input2:'',input3:''}})
    const [communitiesNames,setCommunitiesNames] = useState({input1:'',input2:'',input3:''})
    const [textInputs,setTextInputs] = useState({title:'',description:'',url:''})
    useEffect(()=>{setPostData({...postData,communities:communitiesNames,title:textInputs.title,description:textInputs.description,url:textInputs.url});},[communitiesNames,textInputs])
    return(<div className='create-post'>
    <h1 className='create-header'>Create a post</h1>
    <div className='create-line'/>
    <form onSubmit={(e)=>e.preventDefault()}>
    <UploadFile />
    <div className='create-line'/>
    <AddCommunity setCommunities={setCommunitiesNames}/>
    <TextInputs setTextInputs={setTextInputs}/>
    <button id='post-button' type='button' className='post-button' onClick={console.log(postData)}>Post</button>
    </form>
    </div>)
}

export default CreatePost;