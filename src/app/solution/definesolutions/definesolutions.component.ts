import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreatestepComponent } from 'src/app/steps/createstep/createstep.component';
import { CreatesolutionsComponent } from '../createsolutions/createsolutions.component';
import { SolutionService } from '../solution.service';
import { SolutionSuite } from '../solutions';

@Component({
  selector: 'app-definesolutions',
  templateUrl: './definesolutions.component.html',
  styleUrls: ['./definesolutions.component.scss']
})
export class DefinesolutionsComponent implements OnInit {
  solutionSuitDetails: SolutionSuite;
  solutionSuitId: string;
  conceptId: string;

  constructor(private solutionService:SolutionService,
    public dialog: MatDialog,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  createSolutionSuiteAndAddNewSolution() {
    // if(this.solutionSuitId && this.solutionSuitId.length) {
      this.openDialogNewSolutions();
      return;
    // }

    // this.solutionService.createSolutionSuite(this.conceptId)
    //   .subscribe((data) => {
    //     if(data['status'].toLowerCase() === "success") {
    //       this.solutionSuitId = data['suite_id'] || '';
        
    //       if(this.solutionSuitId && this.solutionSuitId.length) {
    //         this.openDialogNewSolutions();
    //       }
    //     }
    //   });
  }

  openDialogNewSolutions(): void {
      const dialogRef = this.dialog.open(CreatesolutionsComponent, {
        width: '70%',
        data: {
         
          "name" : "",
          "Description": "",
          "type":"",
          "solution":"",
        }
      }
      );
    
    dialogRef.afterClosed().subscribe((result: SolutionSuite) => {
      
    });
    }  
  
    createSolutionSuiteAndAddNewStep(){
      this.openDialogNewSteps();
      return;
    }
    openDialogNewSteps(): void {
      const dialogRef = this.dialog.open(CreatestepComponent, {
        width: '70%',
        data: {
         
          "name" : "",
          "Description": "",
          "type":"",
          "solution":"",
        }
      }
      );
    
    dialogRef.afterClosed().subscribe((result: SolutionSuite) => {
      
    });
    }  
  }


