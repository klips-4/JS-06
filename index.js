class SwitchbleArea {
    currentTab = null; //текущая вкладка 
    activeTabClassName = 'SwitchableArea-tab__active'; // название компонента - актив
    activeAreaClassName = 'SwitchableArea-area__active';
    selectorTabClassname =
        this._createSelector('SwitchableArea-tab');

    constructor(activeTabName) {
        this.currentTab = activeTabName;
        this.init();
    }


     init() {
        $(this.selectorTabClassname).on('click', (event) => {
            this.currentTab = $(event.target).id;
            $(this._createSelector(this.activeTabClassName)).removeClass(this.activeTabClassName)
            $(event.target).addClass(this.activeTabClassName);

            $(this._createSelector(this.activeAreaClassName))
                .removeClass(this.activeAreaClassName);
            $(this._createSelector(event.target.id.replace('tab', 'area'), true))
                .addClass(this.activeAreaClassName);

        });
     }

     _createSelector(name,isID = false) {
        return (isID ? '#' : '.') + name;
     }
}

const switcher = new SwitchbleArea('employees-tab');