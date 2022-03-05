import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, timeout } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageHelper } from '../message/messageHelper';
import { LoadingSpinnerComponent } from '../spinner/loading-spinner.component';
import { Router } from '@angular/router';

@Injectable()
export class HttpHelper {
	static numberOfRequest = 0;
	private timeOutTime = 60000;
	// private baseUrl = 'https://localhost:44380/';
	private baseUrl = 'http://localhost:3000/';

	constructor(
		private httpClient: HttpClient,
		private loadingSpinner: LoadingSpinnerComponent,
		private messageHelper: MessageHelper,
		private router: Router
	) { }

	public hideLoader() {
		// HttpHelper.numberOfRequest = 0;
		this.loadingSpinner.hide();
	}

	postHelper(
		url: string,
		obj?: any,
		pageIndex?: any,
		pageSize?: any,
		sortBy?: any,
		sortOrder?: any,
		filterBy?: any
	): Observable<any> {
		url = this.baseUrl + url;
		HttpHelper.numberOfRequest++;
		if (HttpHelper.numberOfRequest === 1) {
			this.loadingSpinner.show();
		}
		var token = localStorage.getItem('Token') || '';
		var headers = new HttpHeaders({
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: 'Bearer ' + token,
		});

		return this.httpClient
			.post(url, JSON.stringify(obj), { headers: headers })
			.pipe(timeout(this.timeOutTime))
			.pipe(
				map(
					(value) => {
						return value;
					},
					(error: any) => {
						this.handleError(error);
					}
				)
			)
			.pipe(catchError(this.handleError.bind(this)))
			.pipe(
				finalize(() => {
					HttpHelper.numberOfRequest--;
					if (HttpHelper.numberOfRequest === 0) {
						this.loadingSpinner.hide();
					}
				})
			);
	}

	getHelper(
		url: string,
		pageIndex?: any,
		pageSize?: any,
		sortBy?: any,
		sortOrder?: any,
		filterBy?: any
	): Observable<any> {
		url = this.baseUrl + url;
		HttpHelper.numberOfRequest++;
		if (HttpHelper.numberOfRequest === 1) {
			this.loadingSpinner.show();
		}
		var token = localStorage.getItem('Token') || '';
		var headers = new HttpHeaders({
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: 'Bearer ' + token,
		});

		return this.httpClient
			.get(url, { headers: headers })
			.pipe(timeout(this.timeOutTime))
			.pipe(
				map(
					(value) => {
						return value;
					},
					(error: any) => {
						this.handleError(error);
					}
				)
			)
			.pipe(catchError(this.handleError.bind(this)))
			.pipe(
				finalize(() => {
					HttpHelper.numberOfRequest--;
					if (HttpHelper.numberOfRequest === 0) {
						this.loadingSpinner.hide();
					}
				})
			);
	}

	handleError(error: any) {
		console.log(error);
		let errMsg = error.message
			? error.message
			: error.status
				? `${error.status} - ${error.statusText}`
				: 'Server error';
		if (HttpHelper.numberOfRequest == 1) {
			if (error.status == 401) {
				this.messageHelper.showMessage(
					1000,
					'Sorry, Invalid User Name or Password, Please Log in again'
				);
				localStorage.clear();
				this.router.navigate(['/login']);
			} else if (error.message == 'Timeout has occurred') {
				this.messageHelper.showMessage(1000, 'response time out');
			} else {
				this.messageHelper.showMessage(1000, 'error connection');
			}
		}
		return throwError(errMsg);
	}
}
