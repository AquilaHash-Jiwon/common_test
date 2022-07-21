package com.common_test_app;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;

// import com.microsoft.appcenter.AppCenter;
// import com.microsoft.appcenter.analytics.Analytics;
// import com.microsoft.appcenter.crashes.Crashes;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "common_test_app";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView
   * is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }
  }

  // @Override
  // protected void onCreate(Bundle savedInstanceState) {
  // AppCenter.start(getApplication(), "073273d e-a1ae-4 b99-bd66-7d 960765 c9ee",
  // Analytics.class, Crashes.class);
  // }
}
