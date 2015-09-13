@include('_include.frontend.header')

	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-lg-offset-4">
				<h3 class="text-center">Login</h3>
				<form action="">
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" class="form-control" id="email">
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" class="form-control" id="password">
					</div>
					<button class="btn btn-info btn-block">Submit</button>
				</form>
				<hr>
				<p>Don't have account? <a href="">Sign Up!</a></p>
			</div>
		</div>
	</div>
	

@include('_include.frontend.footer')
