import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/models/article.model';
import { Event } from 'src/models/event.model';
import { Tool } from 'src/models/tool.model';
import { ArticleService } from 'src/services/article.service';
import { EventService } from 'src/services/event.service';
import { MemberService } from 'src/services/member.service';
import { ToolService } from 'src/services/tool.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent implements OnInit {
  
 EventColumns: string[] = ['id', 'title', 'lieu', 'date', 'actions'];
 ArticleColumns: string[] = ['id', 'type', 'titre', 'lien', 'sourcePdf',  'actions'];
 toolsColumns: string[]= ['id',   'source','date','actions'];
  currentItemId: string;
  event: Event[]=[]
  article: Article[]=[]
  tool: Tool[]=[]
  allTools: Tool[]=[]
  allEvent: Event[]=[]
  allArticle: Article[]=[]
  diffEvent:Event[]=[]

  constructor( private memberService :MemberService,
    private toolService :ToolService,
    private articleService :ArticleService,
    private eventService :EventService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.findInfo()

  }

  findInfo(){





    this.currentItemId = this.activatedRoute.snapshot.params.id;
    

    this.memberService.findEventdiifById(this.currentItemId).then(item=>{this.allEvent=item
     
      })
      this.memberService.findArticlediifById(this.currentItemId).then(item=>{this.allArticle=item
     
        })
        this.memberService.findOutilsdiifById(this.currentItemId).then(item=>{this.allTools=item
         
          })


  }

  onSubmitTools(id:any){
    this.memberService.affecterOutil(this.currentItemId,id).then((item)=>this.findInfo()
    )

  }
  onSubmitEvt(id:any){
    this.memberService.affecterEvt(this.currentItemId,id).then((item)=>this.findInfo()
    )

  }
  onSubmitArticle(id:any){
    this.memberService.affecterPub(this.currentItemId,id).then((item)=>this.findInfo()
    )

  }

}
