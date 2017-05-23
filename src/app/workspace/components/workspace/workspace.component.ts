import { Component, OnInit } from '@angular/core';

import { WebContentService } from '../../../shared/services/web-content.service';

@Component({
  selector: 'cv-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass']
})
export class WorkspaceComponent implements OnInit {

  constructor(private websiteService: WebContentService) { }

  ngOnInit() {
  }
}
