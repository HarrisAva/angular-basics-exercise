import { Component } from "@angular/core";

@Component ({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']

})
export class ArticleComponent {
    title: string = 'Whatever you want';
    content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna. In egestas erat imperdiet sed euismod nisi. Non arcu risus quis varius quam. Eu mi bibendum neque egestas congue quisque egestas diam in. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Fermentum leo vel orci porta non pulvinar neque. Est sit amet facilisis magna etiam. Risus viverra adipiscing at in tellus. At risus viverra adipiscing at in tellus integer feugiat. ';

    isTechRelated = false;

    getColor() {
        return this.isTechRelated  ? 'blue' : 'yellow';
    }
    
    }

