import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'attachment-list',
    styleUrls: ['./attachment-list.component.css'],
    templateUrl: './attachment-list.component.html'
})
export class AttachmentListComponent {
    constructor(private readonly httpClient: HttpClient) { }

    upload(event: Event) {
        const inputElement = <HTMLInputElement>(event.srcElement || event.target);
        const files = inputElement.files;

        if (!files) return;

        const formData = new FormData();
        for (var index = 0; index < files.length; index++) {
            const file = files[index];
            formData.set(file.name, file, file.name);
        }

        this.httpClient.post<{contents: string}>('upload', formData)
            .subscribe(
                response => console.log(response),
                error => console.log(error));

        // Clear the value to allow uploading the same file again.
        inputElement.value = '';
    }
}
