import { AuthGuardService } from './../../common/auth/auth.guard.service';
import { SystemUser } from './../../models/systemUser';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SecurityService } from './../../services/security.service';
import { MessageHelper } from './../../common/message/messageHelper';
import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from 'src/app/common/enums/appEnums';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [SecurityService]
})
export class LoginComponent implements OnInit {

	public systemUser: SystemUser = new SystemUser();

	constructor(
		private messageHelper: MessageHelper,
		private securityService: SecurityService,
		private router: Router,
		private toastr: ToastrService,
		private authGuardService: AuthGuardService
	) { }

	ngOnInit() {
		let token = localStorage.getItem('token');
		if (token) {

		this.authGuardService.setLoggedIn();
		this.router.navigate(['/dashBoard']);
		
		}
	}

	public onSubmit(loginForm: { valid: any; }): void {
		// debugger
		if (loginForm.valid) {
			
			this.securityService.login(this.systemUser).subscribe(response => {
				if (response.responseCode === ResponseStatus.success) {
					localStorage.setItem("Token", response.responseObj.token);
					localStorage.setItem("User", JSON.stringify(response.responseObj.user));
					localStorage.setItem("UserId", response.responseObj.user._id);
					// localStorage.setItem("lstPermission",JSON.stringify(response.responseObj.user.lstAccessApi) );

					this.messageHelper.showMessage(response.responseCode, response.message);
					
					this.authGuardService.setLoggedIn();
					this.router.navigateByUrl('/dashboard');
          			// /this.getUserPermission();//after that redirect to dashboard page
				} else {
					this.messageHelper.showMessage(response.responseCode, response.message);
				}
			});
		}
	}

}
