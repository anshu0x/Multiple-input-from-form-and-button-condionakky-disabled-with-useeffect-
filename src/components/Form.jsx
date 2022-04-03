import React from 'react'
import './Form.css'
function Form() {
  return (
    <>
    <div className='form'>

        <h1 style={{textAlign:"center"}}>Send Us a Message</h1>
        
    <div className='container' >


    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="form-floating">
  <textarea class="form-control mb-3" placeholder="Leave a message here" id="floatingTextarea2" style={{height: 100}}></textarea>
  <label for="floatingTextarea2">Leave a message here</label>
</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Remember me</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>

    </div>
    
    
    </>
  )
}

export default Form