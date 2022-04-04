import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
	import User from 'App/Models/User';


	export default class UsersController {
		public async index({}: HttpContextContract){
			const user = await User.all();
			return user;
		}
		public async store({ request }: HttpContextContract){
			const data = request.only(['username', 'password', 'email']);
			const user = await User.create(data);
			return user;
		}
		public async show({ params }: HttpContextContract){
			const user = await User.findOrFail(params.id);
			return user;
		}
		public async update({ request, params }: HttpContextContract){
			const user = await User.findOrFail(params.id);
			const data = request.only(['username', 'password', 'email']);
			user.merge(data);
			await user.save();
			return user;
		}
		public async destroy({ params }: HttpContextContract){
			const user = await User.findOrFail(params.id);
			await user.delete();
		}
	}

  // async login({ request, response, auth }){
  // try {
  //   const { email, password } = request.all();
  //   const token = await auth.attempt(email, password);

  //   return token;
  // } catch (error) {
  //   return response.status(500).send({ error:error });
  // }
  // }
