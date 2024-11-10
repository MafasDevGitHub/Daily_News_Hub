import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../store/utils/thunks";
import { clearPostById } from '../../store/reducers/posts';
import Moment from "react-moment";

const PostComponent = () => {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    let params = useParams();


    useEffect(() => {
        dispatch(fetchPostById(params.id))
    }, [])

    useEffect(()=>{
        return()=>{
            dispatch(clearPostById())
        }
    },[])

    return (
        <>
            {posts.postById ?
                <div className="article-container">
                    <h1 style={{ color: "white" }}>{posts.postById.title}</h1>
                    <div
                        style={{
                            backgroundImage: `url(${posts.postById.imagexl})`,
                            backgroundSize: 'cover',  // Ensures the image covers the div
                            backgroundPosition: 'center',  // Centers the image in the div
                            height: '500px' // Set a height or other size to make the div visible
                        }}
                        className="mt-3 mb-3"
                    >
                    </div>

                    <div className="mt-3 mb-3">
                        <span style={{ color: "white" }}><b>Created by : </b></span>
                        <span style={{ color: "white" }}>{posts.postById.author} - </span>
                        <Moment format="DD MMMM" style={{ color: "yellowgreen" }}>
                            <b>{posts.postById.createdAt}</b>
                        </Moment>

                    </div>

                    <div className="mt-3" style={{color:"#ececec"}}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html:posts.postById.content
                            }}
                        >
                        </div>
                    </div>

                </div>
                : null}
        </>
    )
}

export default PostComponent