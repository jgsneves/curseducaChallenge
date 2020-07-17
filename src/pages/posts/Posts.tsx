import React, {useState} from 'react';
import HeaderNavBar from '../../components/navbar/HeaderNavBar';
import FooterContent from '../../components/footer/Footer';
import './Posts.css';
import { Editor } from "@tinymce/tinymce-react";



const Posts = () => {
    const [editorContent, setEditorContent] = useState("")
    const database = {
        "posts": [
            {
                "id": 1,
                "title": "Minha primeira postagem",
                "text": "Essa é a minha <b>primeira postagem</b>!",
                "id_category": 3,
                "id_user": 2,
                "date": "2020-07-07 14:00:00"
            },
            {
                "id": 2,
                "title": "Meu primeiro artigo!",
                "text": "<p>Meu primeiro artigo está demais!</p>",
                "id_category": 3,
                "id_user": 1,
                "date": "2020-10-01 08:30:00"
            }
        ],
        "categories": [
            {
                "id": 1,
                "name": "Artigos"
            },
            {
                "id": 2,
                "name": "Pensamentos"
            },
            {
                "id": 3,
                "name": "Avisos"
            },
            {
                "id": 4,
                "name": "Conteúdos"
            }
        ]
    }
    
    function handleFormSubmit() {
        //
    }

    function handleInputChange() {
        //
    }

    return (
        <>
            <HeaderNavBar />
            <main className="mainContainer">
                <form onSubmit={handleFormSubmit} className="formContainer">
                    <fieldset className="fieldsetContainer">
                        <legend>
                            <h1>Escreva algo:</h1>
                        </legend>

                        <div className="field">
                            <label>
                                Título
                                <input type="text" name="title" id="title" onChange={handleInputChange}/>
                            </label>
                        </div>
                        <label>
                            Categoria
                            <select>
                                <option value="articles">Artigos</option>
                                <option value="thoughts">Pensamentos</option>
                                <option value="warnings">Avisos</option>
                                <option selected value="contents">Conteúdos</option>
                            </select>
                        </label>
                        <Editor
                            value={editorContent}
                            init={{
                            height: 200,
                            menubar: false
                            }}
                            onEditorChange={setEditorContent}
                        />
                    </fieldset>
                </form>

                <div className="postContainer">
                    <h1>Postagens:</h1>
                    <span>
                        {database.posts.map(post => (
                            <div key={post.id} className="post">
                                <div className="postHeader">
                                    <h2 className="postUserName">Nome do usuário: {post.id_user}</h2>
                                    <h2 className="postTitle">{post.title}</h2>
                                    <p className="postDate">{post.date}</p>
                                </div>
                                
                                <p className="postText">{post.text}</p>
                                <p className="postCategory">categoria: {post.id_category}</p>
                            </div>
                        ))}
                    </span>
                </div>
            </main>
            <FooterContent />
        </>
    );
}

export default Posts;