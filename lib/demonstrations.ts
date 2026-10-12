export type DemoPhoto={id:string,title:string,category:'Facial movement'|'Fitness'|'Portrait',src:string,alt:string,caption:string};
export const demoPhotos:DemoPhoto[]=[
{id:'front',title:'Facial observation · front view',category:'Facial movement',src:'/demonstrations/facial-front.webp',alt:'Matthew Roberts photographed facing forward',caption:'A personal photograph for observing facial appearance and expression.'},
{id:'angle',title:'Facial observation · close view',category:'Facial movement',src:'/demonstrations/facial-angle.webp',alt:'Close photograph of Matthew Roberts’ face',caption:'A closer view from Matthew’s personal photo collection.'},
{id:'smile',title:'Expression · smiling',category:'Facial movement',src:'/demonstrations/facial-smile.webp',alt:'Matthew Roberts smiling',caption:'A personal expression photograph. Lighting, position, and expression can affect appearance.'},
{id:'expression',title:'Expression · another perspective',category:'Facial movement',src:'/demonstrations/facial-expression.webp',alt:'Matthew Roberts looking toward the camera',caption:'Another photograph from Matthew’s facial observation collection.'},
{id:'fitness',title:'Fitness · personal photo',category:'Fitness',src:'/demonstrations/fitness-portrait.webp',alt:'Matthew Roberts in a personal fitness photograph',caption:'Matthew’s personal fitness photograph; individual experience, not a promised outcome.'},
{id:'portrait',title:'Meet the creator',category:'Portrait',src:'/media/matthew.webp',alt:'Matthew Roberts wearing glasses and a white shirt',caption:'Matthew Roberts, author and creator of Autonomic Bio Recovery Maneuvers.'}
];
