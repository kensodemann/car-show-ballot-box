import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BallotPage } from './ballot.page';
import {
  CarShowsService,
  createCarShowsServiceMock,
  testCarShows
} from '../services/car-shows';

describe('BallotPage', () => {
  let component: BallotPage;
  let fixture: ComponentFixture<BallotPage>;
  let carShows;

  beforeEach(async(() => {
    carShows = createCarShowsServiceMock();
    carShows.getCurrent.and.returnValue(of(testCarShows[1]));
    TestBed.configureTestingModule({
      declarations: [BallotPage],
      providers: [{ provide: CarShowsService, useValue: carShows }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('exists', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('gets the current car show', () => {
      expect(carShows.getCurrent).toHaveBeenCalledTimes(1);
      expect(component.carShow).toEqual(testCarShows[1]);
    });
  });

  describe('saving', () => {});
});
