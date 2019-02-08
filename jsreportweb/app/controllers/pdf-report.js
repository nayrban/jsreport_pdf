import Controller from '@ember/controller';
import jsreport from 'jsreport-browser-client-dist';


jsreport.serverUrl = 'http://localhost:5488';
//This could be changed with our model data
const dbrcDate = {
  student: {
    name: "Bryan",
    lastname: "Acuna Nunez",
  },
  goals: [
    {
      title: "My Daily Goal (Check-In)",
      description: "Do bla bla bla"
    },
    {
      title: "Things I Did Well (Check-Out)",
      description: "Do bla bla bla"
    },
    {
      title: "Things I Need to Work On (Check-Out)",
      description: "Do bla bla bla"
    }
  ],
  scales: [
    {
      schoolWide: 'Safe',
      range: [
        {
          items: [
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
          ]
        },
        {
          items: [
          ]
        },
        {
          items: [
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
          ]
        },
        {
          items: [
          ]
        },
        {
          items: [
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
          ]
        }
      ]
    },
    {
      schoolWide: 'Respectful',
      range: [
        {
          items: [
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
          ]
        },
        {
          items: [
          ]
        },
        {
          items: [
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
          ]
        },
        {
          items: [
          ]
        },
        {
          items: [
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
            {item: "Stays in assigned area"},
          ]
        }
      ]
    }
  ]
};
const request = {
  template: {name: 'daily_behavior_report_card'},
  data: dbrcDate
};

export default Controller.extend({
  actions: {
    displayPdf() {
      //open download dialog for report
      //jsreport.download('myReport.pdf', request);

      //display report in placeholder with id reportPlaceholder
      jsreport.render('reportPlaceholder', request);
    },
    downloadPdf() {
      jsreport.download('dbrc-report.pdf', request);
    }
  }
});
