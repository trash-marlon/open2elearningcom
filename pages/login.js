import BasicLayout from '../src/layouts/BasicLayout'

export default function Login() {
  return (
    <BasicLayout>
      <div className="card mx-auto login-box">
      <div className="card-body">
      <h4 className="card-title mb-4">Entrar</h4>
      <form>
          <div className="form-group">
			 <input type="email" className="form-control" placeholder="Email Address"/>
          </div>
          <div className="form-group">
			<input type="password" className="form-control" placeholder="Password"/>
          </div>
          
          <div className="form-group">
          	<a href="#" className="float-right">Forgot password?</a> 
           
          </div>
          <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block"> Login  </button>
          </div>  
      </form>
      </div>
    </div>
    </BasicLayout>
  )
}