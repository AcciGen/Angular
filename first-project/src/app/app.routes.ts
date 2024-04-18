import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { FeaturesComponent } from './components/features/features.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { CompanyComponent } from './components/company/company.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', title: 'Home', component: HomeComponent },
    { path: 'login', title: 'Login', component: LoginComponent },
    { path: 'signup', title: 'Sign Up', component: SignUpComponent },
    { path: 'products', title: 'Products', component: ProductsComponent },
    { path: 'features', title: 'Features', component: FeaturesComponent },
    { path: 'marketplace', title: 'Marketplace', component: MarketplaceComponent },
    { path: 'company', title: 'Company', component: CompanyComponent }
];