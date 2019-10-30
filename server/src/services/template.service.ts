import { Request, Response } from "express";
import { Template, ITemplate } from "../models/template.model";

export class TemplateService {
    public getAllTemplates(request: Request, response: Response) {
        Template.find({}, (error: Error, templates: ITemplate []) => {
            error ? response.send(error) : response.json(templates);
        });
    }
    public addNewTemplate(request: Request, response: Response) {
        const newTemplate = new Template(request.body);
        
        newTemplate.save((error: Error, template: ITemplate) => {
            error ? response.send(error) : response.json(template);
        });
    }
    public deleteTemplate(request: Request, response: Response) {
        const templateId = request.params.id;
        Template.findByIdAndDelete(templateId, (error: Error, template: ITemplate) => {
            if(error) {
                response.send(error);
            }
            const message = template ? "Deleted successfully" : `failed to delete template with id ${templateId}`;
            response.send(message);
        });
    }

    public updateTemplate(request: Request, response: Response) {
        const templateId = request.params.id;
        Template.findByIdAndUpdate(templateId, (error: Error, template: ITemplate) => {
            if(error) {
                response.send(error);
            }
            const message = template ? "template updated" : `didnt find template with id ${templateId}`;
        });
    }
}