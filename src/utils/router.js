const ROUTE_CHANGE_EVENT = "ROUTE_CHANGE";

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

// 아래 함수는 url 경로 바꾸고 이벤트 바로 실행시킴
export const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params)); //dispathEvent는 이벤트를 발생시키는 것
};
