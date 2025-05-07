package com.ruoyi.system.utils;

public class BaseContext {  //该类对ThreadLocal对象本身其其下的三个方法进行了封装，方便且更好的调用

    //创建 ThreadLocal 对象，可在其中设置“线程局部变量”，存储数据该独享的线程中，后“该存入的数据”会被取出来
    public static ThreadLocal<Long> threadLocal = new ThreadLocal<>();

    /**
     * 存入请求用户的id
     * (设置“线程局部变量”)
     * @param id
     */
    public static void setCurrentId(Long id) {
        //调用ThreadLocal对象的.set(T value) 设置线程局部变量 / 存储数据进该“请求”独享的“线程”中
        threadLocal.set(id);
    }


    /**
     * 获得请求用户的id
     * (获得“线程局部变量”)
     * @return
     */
    public static Long getCurrentId() {
        return threadLocal.get();
    }

    /**
     * 移除请求用户的id
     * (移除“线程局部变量”)
     */
    public static void removeCurrentId() {
        threadLocal.remove();
    }
}
