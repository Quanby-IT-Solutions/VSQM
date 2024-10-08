import { animate, style, transition, trigger } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 }))
      ])
    ])
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentDate: Date = new Date();
  currentTime: Date = new Date();
  private timeInterval: any;
  profileDropdown: boolean = false;
  name = '';
  role = '';
  email = '';
  profile_pic = '';

  searchTerm: string = '';
  suggestions = [
    { label: 'Go to Dashboard', route: '/student/dashboard' },
    { label: 'Go to SpeechLab', route: '/student/speechlab' },
    // Add more suggestions here
  ];
  filteredSuggestions = this.suggestions;
  showSuggestions: boolean = false;

  constructor(
    private router: Router,
  ) { }

  filterSuggestions() {
    const term = this.searchTerm.toLowerCase();
    this.filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.label.toLowerCase().includes(term)
    );
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.clearSearch();
  }

  clearSearch() {
    this.searchTerm = '';
    this.showSuggestions = false;
    this.filteredSuggestions = this.suggestions;
  }

  onFocus() {
    this.showSuggestions = true;
  }

  onBlur() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }

  ngOnInit() {
    // Update the current time every second
    this.timeInterval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

    // If needed, you can still fetch profile data from other sources in the future
  }

  ngOnDestroy() {
    // Clear the interval to prevent memory leaks
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  info = "Welcome back!";
  notification = true;
  settings = true;

  dropDown: boolean = false;
  toggleNotification() {
    this.dropDown = !this.dropDown;
  }
  toggleDropdown() {
    this.profileDropdown = !this.profileDropdown;
  }

  closeDropdown() {
    this.dropDown = false;
  }
  closeProfileDropdown() {
    this.profileDropdown = false;
  }
}
