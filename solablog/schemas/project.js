
export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: "title",
            type: "string",

        },
        {
            name: "date",
            type: "datetime",

        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text",
        },
        {
            name:"projectType",
            title:"Project type",
            type: "string",
            options: {
                list: [{
                    value: "personal", title : "personal"
                },{
                    value: "client", title: "Client"
                },{
                    value: "school", title: "School"
                }
            ]
            }
        }, {
            name: "link",
            type: "url",
        }, {
            name : "tages",
            type : "array",
            of: [
                {
                    type: "string",
                    options: {
                        layout: "tags",
                    }
                }
            ]
        }
    ]
}