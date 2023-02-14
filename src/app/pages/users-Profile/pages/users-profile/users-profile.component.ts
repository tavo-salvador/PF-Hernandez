import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../store/user.actions';
import { selectTotalUsersNumber, selectUsersArray } from '../../store/user.selectors';
import { UserProfile } from '../../models/userprofile.model';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.scss']
})
export class UsersProfileComponent implements OnInit {
  public displayedColumns = ['id', 'avatar', 'first_name', 'last_name', 'email'];
  public users: UserProfile [] = [];
  public totalUsers: Observable<number>;
  public perPage = 6;
  public perPageOptions = [3, 6, 12, 18];

  constructor(private store: Store) {
    this.totalUsers = this.store.select(selectTotalUsersNumber);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers({ page: 1, per_page: this.perPage }));
    this.store.select(selectUsersArray)
      .subscribe((users) => {
        this.users = users;
      });
  }

  onPageChange(ev: PageEvent) {
    this.store.dispatch(loadUsers({ page: ev.pageIndex + 1, per_page: ev.pageSize }))
  }
}
