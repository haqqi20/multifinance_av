import {Component, Input, OnInit, EventEmitter, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="model" root="true" class="layout-menu layout-main-menu clearfix"
            [reset]="reset" visible="true" parentActive="true" ></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: any[];

    theme = 'blue';

    layout = 'blue';

    version = '-v4';

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/']},
            {
                label: 'Customization', icon: 'fa fa-fw fa-bars',
                items: [
                    {label: 'Static Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToStaticMenu()},
                    {label: 'Overlay Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToOverlayMenu()},
                    {label: 'Slim Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToSlimMenu()},
                    {label: 'Horizontal Menu', icon: 'fa fa-fw fa-bars',  command: () => this.app.changeToHorizontalMenu()},
                    {label: 'Inline Profile', icon: 'fa fa-sun-o fa-fw',  command: () => this.app.profileMode = 'inline'},
                    {label: 'Top Profile', icon: 'fa fa-moon-o fa-fw',  command: () => this.app.profileMode = 'top'},
                    {label: 'Light Menu', icon: 'fa fa-sun-o fa-fw',  command: () => this.app.darkMenu = false},
                    {label: 'Dark Menu', icon: 'fa fa-moon-o fa-fw',  command: () => this.app.darkMenu = true}
                ]
            },
            {
                label: 'Acquisition', icon: 'fa fa-fw fa-bars' ,
                items: [
                    {label: 'Aplication', icon: 'fa fa-fw fa-bars', routerLink: ['aplication']},
                    {label: 'Survey', icon: 'fa fa-fw fa-bars', routerLink: ['survey']},
                    {label: 'Approval', icon: 'fa fa-fw fa-bars', routerLink: ['approval']},
                    {label: 'PO', icon: 'fa fa-fw fa-bars', routerLink: ['po']},
                    {label: 'Disbursement', icon: 'fa fa-fw fa-bars', routerLink: ['disbursement']},
                    {label: 'Products', icon: 'fa fa-fw fa-bars', routerLink: ['products']},
                    {label: 'Customer', icon: 'fa fa-fw fa-bars', routerLink: ['customer']},
                    {label: 'Dealer', icon: 'fa fa-fw fa-bars', routerLink: ['dealer']},
                ]
            },
        ];
    }

    changeTheme(theme: string) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');

        if (this.version === '-v4') {
            themeLink.href =  'assets/theme/theme-' + theme + '-v4' + '.css';
        }

        this.theme = theme;

    }

    changeLayout(layout: string, special?: boolean) {
        const layoutLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('layout-css');

        if (this.version === '-v4') {
            layoutLink.href = 'assets/layout/css/layout-' + layout + '-v4' + '.css';
        }

        this.layout = layout;

        if (special) {
            this.app.darkMenu = true;
        }
    }

    changeVersion(version: string) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
        const layoutLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('layout-css');

        if (version === '-v4') {
            themeLink.href =  'assets/theme/theme-' + this.theme + '-v4' + '.css';
            layoutLink.href = 'assets/layout/css/layout-' + this.layout + '-v4' + '.css';
            this.version = '-v4';
        }

    }
}

@Component({
  /* tslint:disable:component-selector */
    selector: '[app-submenu]',
  /* tslint:enable:component-selector */
    template: `
        <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
            <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
                <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)"
                   class="ripplelink" *ngIf="!child.routerLink"
                    [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i><span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down menuitem-toggle-icon" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>

                <a (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)" class="ripplelink" *ngIf="child.routerLink"
                    [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                   [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                    <i [ngClass]="child.icon"></i><span>{{child.label}}</span>
                    <i class="fa fa-fw fa-angle-down menuitem-toggle-icon" *ngIf="child.items"></i>
                    <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                </a>
                <div class="layout-menu-tooltip">
                    <div class="layout-menu-tooltip-arrow"></div>
                    <div class="layout-menu-tooltip-text">{{child.label}}</div>
                </div>
                <div class="submenu-arrow" *ngIf="child.items"></div>
                <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)" [reset]="reset" [parentActive]="isActive(i)"
                    [@children]="(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?
                     'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
            </li>
        </ng-template>
    `,
    animations: [
        trigger('children', [
            state('hiddenAnimated', style({
                height: '0px'
            })),
            state('visibleAnimated', style({
                height: '*'
            })),
            state('visible', style({
                display: 'block'
            })),
            state('hidden', style({
                display: 'none'
            })),
            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    _reset: boolean;

    _parentActive: boolean;

    activeIndex: number;

    constructor(public app: AppComponent) {}

    itemClick(event: Event, item: MenuItem, index: number) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }

        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({originalEvent: event, item: item});
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {
                this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }

        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true; } else {
                this.app.resetMenu = false; }

            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    }

    onMouseEnter(index: number) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    @Input() get reset(): boolean {
        return this._reset;
    }

    set reset(val: boolean) {
        this._reset = val;

        if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
            this.activeIndex = null;
        }
    }

    @Input() get parentActive(): boolean {
        return this._parentActive;
    }

    set parentActive(val: boolean) {
        this._parentActive = val;

        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}
