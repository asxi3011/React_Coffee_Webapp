
export default function FailReply({message}){
    return(
    <div className="row mt-3">
    <div className="d-flex justify-content-center my-5">
                <div id='appendListCategory'>
                    <div className="col-12 p-4 rounded text-center">
                        <div>{message}</div>
                        <img className="img-getOrder"
                            src="https://image.freepik.com/free-vector/design-thinking-concept-illustration_114360-3330.jpg"
                            alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}