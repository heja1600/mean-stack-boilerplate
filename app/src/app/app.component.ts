import { Component } from '@angular/core';
import { TemplateService } from './services/template.service';
import { Template } from './models/template.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TemplateService]
})
export class AppComponent {
  title = 'mean-startup-typescript';

  templates = [];
  constructor(private templateService: TemplateService) {
  
  }

  public addTemplate() {
    this.templateService.addTemplate(new Template({
      name: 'herman',
    }), (template) => {
      this.getAllTemplates();
    });
  }

  public getAllTemplates() {
    this.templateService.getAllTemplates((templates) => {
      this.templates = templates;
    });
  }

  public deleteTemplate(template: Template) {
    this.templateService.deleteTemplate(template, () => {
      this.getAllTemplates();
    });
  }
}
