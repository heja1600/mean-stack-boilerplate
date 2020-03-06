

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Template } from '../models/template.model';

@Injectable()
export class TemplateService {

    private readonly url = `http://localhost:3000/template`;

    constructor(private httpClient: HttpClient) { }
    
    public addTemplate(template: Template, callback: (template: Template) => any) {
        this.httpClient.post<Template>(this.url, template)
            .subscribe(callback, error => console.error(error));
    }

    public getTemplate(id: string, callback: (template: Template) => any) {
        this.httpClient.get<Template>(`${this.url}/${id}`)
            .subscribe(callback, error => console.error(error));
    }

    public updateTemplate(template: Template, callback: (template: Template) => any) {
        this.httpClient.put(`${this.url}/${template._id}`, template)
            .subscribe(callback, error => console.error(error));
    }
    
    public deleteTemplate(template: Template, callback: () => any) {
        this.httpClient.delete(`${this.url}/${template._id}`)
            .subscribe(callback, error => console.error(error));
    }
    
    public getAllTemplates(callback: (template: Template []) => any) {
        this.httpClient.get<Template[]>(this.url)
            .subscribe(callback, error => console.error(error));
    }
}