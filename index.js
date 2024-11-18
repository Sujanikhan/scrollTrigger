var a=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true
}
})
a.to("#fanta",{
    top:"130%",
    left:"0%"
},'pepsi')
a.to("#orange-cut",{
    top:"160%",
    left:"15%"
},'pepsi')
a.to("#orange",{
    top:"182%",
    right:"10%"
},'pepsi')
a.to("#leaf",{
    rotate:"130deg",
    top:"130%",
    left:"70%"
},'pepsi')

a.to("#leaf2",{
    rotate:"130deg",
    top:"120%",
    left:"0%"
},'pepsi')

var b=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    // markers:true
}})
b.from("#lemon1",{
    left:"-50%",
    top:"110%"
},'test')

b.from("#coke",{
    roate:"-40deg",
    left:"-5%",
    top:"10%"
},'test')

b.from(".lemon",{
    left:"50%",
    top:"110%"
},'test')

b.from("#pepsi",{
    roate:"40deg",
    left:"50%",
    top:"10%"
},'test')

b.to("#fanta",{
    top:"228%",
    left:"35%"
},'test')

b.to("#orange-cut",{
    top:"223%",
    left:"41%"
},'test')