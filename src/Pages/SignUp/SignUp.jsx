import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const {createUser}= useContext(AuthContext)
    const handleSignUp = event=> {
        event.preventDfault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
   
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-1/2">
            <img src={img} alt="" />
            </div>
            <form >
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-3xl text-center font-bold">SignUp</h1>
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="email" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                       <input className="btn btn-primary" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='my-4 text-center'>Already have account <Link className='font-bold text-orange-600' to='/login'>Login</Link> </p>
                
            </div>
            </form>
            
        </div>
    </div>
    );
};

export default SignUp;