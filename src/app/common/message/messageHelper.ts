import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import * as appEnums from '../../common/enums/appEnums';

@Injectable()
export class MessageHelper {
    options: GlobalConfig | undefined;
    constructor(private toastr: ToastrService) {
    }

    showMessage(code:number, message:string) {
        if (code === appEnums.ResponseStatus.success) {
            this.toastr.success(message, 'BLUEBOX INVENTORY', this.options);
        }
        else if (code === appEnums.ResponseStatus.warning) {
            this.toastr.warning(message, 'BLUEBOX INVENTORY', this.options);
        }
        else if (code === appEnums.ResponseStatus.info) {
            this.toastr.info(message, 'BLUEBOX INVENTORY', this.options);
        }
        else if (code === appEnums.ResponseStatus.fail) {
            this.toastr.error(message, 'BLUEBOX INVENTORY', this.options);
        } else if (code != null) {
            this.toastr.error(message, 'BLUEBOX INVENTORY', this.options);
        }
    }
}
