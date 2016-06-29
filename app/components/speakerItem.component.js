export const SpeakerItemComponent = {
  bindings: {
    data: '<'
  },
  template: `
    <li>
      <figure>
        <img width="96px" ng-src="{{$ctrl.data.photo}}" alt="{{$ctrl.data.name}}" />
      </figure>
      <div>
        <h3>{{$ctrl.data.name}}</h3>
        <p>{{$ctrl.data.country}}</p>
        <p>{{$ctrl.data.talk}}</p>
      </div>
    </li>
  `
}