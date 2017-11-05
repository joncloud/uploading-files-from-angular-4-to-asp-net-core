import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'attachment-list',
    templateUrl: './attachment-list.component.html'
})
export class AttachmentListComponent {
    constructor(private readonly httpClient: HttpClient) { }

    upload() {
        const contents = new Blob('Lorem ipsum dolor sit amet'.split(''));
        const formData = new FormData();
        formData.set('file', contents, 'contents.txt');

        this.httpClient.post<{contents: string}>('upload', formData)
            .subscribe(
                response => console.log(response),
                error => console.log(error));
    }
}
