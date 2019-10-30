import { TemplateService } from "../services/template.service";
import { Application } from "express";


export class TemplateController {
    private templateService: TemplateService;
    constructor(private app: Application) { 
        this.templateService = new TemplateService;
    }

    public routes() {

        this.app.route('/template').get(this.templateService.getAllTemplates);

        this.app.route('/template').post(this.templateService.addNewTemplate);

        this.app.route('/template:id')
            .delete(this.templateService.deleteTemplate)
            .put(this.templateService.updateTemplate);
    }
}